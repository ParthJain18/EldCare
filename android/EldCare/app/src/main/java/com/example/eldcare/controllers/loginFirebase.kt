package com.example.eldcare.controllers

import android.content.Context
import android.util.Log
import android.widget.Toast
import com.google.firebase.Firebase
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.auth
import com.google.firebase.database.FirebaseDatabase

private lateinit var auth: FirebaseAuth

fun loginFirebase(email: String, password: String, context: Context, callback: (Boolean) -> Unit) {
    val TAG = "loginFirebase"
    auth = Firebase.auth
    auth.signInWithEmailAndPassword(email, password)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
//                val user = auth.currentUser
//                val sharedPrefManager = SharedPreferencesManager(context)
//                sharedPrefManager.syncData()


                callback(true)
            } else {
                // If sign in fails, display a message to the user.
                Log.w(TAG, "signInWithEmail:failure", task.exception)
                Toast.makeText(
                    context,
                    "Authentication failed.",
                    Toast.LENGTH_SHORT,
                ).show()
                callback(false)
            }
        }
}