package com.example.eldcare.controllers

import android.content.Context
import android.util.Log
import android.widget.Toast
import com.example.eldcare.models.Users
import com.google.firebase.Firebase
import com.google.firebase.auth.UserProfileChangeRequest
import com.google.firebase.auth.auth
import com.google.firebase.database.FirebaseDatabase


fun signupFirebase(userObj: Users, context: Context, callback: (Boolean) -> Unit) {
    val TAG = "signUp"
    val auth = Firebase.auth
    val db = FirebaseDatabase.getInstance()

    Log.d(TAG, "signUp: ${userObj.email}")

    // Validate email and password
    if (userObj.email.isEmpty() || userObj.password.isEmpty()) {
        Toast.makeText(
            context,
            "Email or password is empty",
            Toast.LENGTH_SHORT,
        ).show()
        callback(false)
        return
    }

    auth.createUserWithEmailAndPassword(userObj.email, userObj.password)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
                val user = auth.currentUser
                val profileUpdates = UserProfileChangeRequest.Builder()
                    .setDisplayName(userObj.name)
                    .build()
                user?.updateProfile(profileUpdates)
                    ?.addOnCompleteListener { profileUpdateTask ->
                        if (profileUpdateTask.isSuccessful) {
                            db.getReference("elderly").child(user.uid)
                                .setValue(
                                    mapOf(
                                        "email" to userObj.email,
                                        "userType" to userObj.userType,
                                        "name" to userObj.name,
                                        "phoneNumber" to userObj.phoneNumber,
                                    )
                                )
                            db.getReference("users").child(user.uid)
                                .setValue(
                                    mapOf(
                                        "email" to userObj.email,
                                        "userType" to userObj.userType,
                                        "name" to userObj.name,
                                        "phoneNumber" to userObj.phoneNumber,
                                    )
                                )
                                .addOnSuccessListener {
                                    Log.d(TAG, "User profile and metadata updated.")
                                    callback(true)
                                }
                                .addOnFailureListener {
                                    Log.d(TAG, "User profile and metadata update failed.")
                                    callback(false)
                                }
                        } else {
                            Log.w(TAG, "createUserWithEmail:failure", task.exception)
                            Toast.makeText(
                                context,
                                "Authentication failed.",
                                Toast.LENGTH_SHORT,
                            ).show()
                            callback(false)
                        }
                    }
            } else {
                Log.w(TAG, task.exception?.message ?: "Authentication Failed", task.exception)
                Toast.makeText(
                    context,
                    task.exception?.message ?: "Authentication Failed",
                    Toast.LENGTH_LONG,
                ).show()

                callback(false)
            }
        }
}