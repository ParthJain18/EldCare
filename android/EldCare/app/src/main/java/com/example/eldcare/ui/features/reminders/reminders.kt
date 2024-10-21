package com.example.eldcare.ui.features.reminders

import android.app.AlertDialog
import android.content.Context
import android.util.Log
import com.google.firebase.Firebase
import com.google.firebase.auth.auth
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.firestore.FirebaseFirestore

fun sendReminder(data: String, context: Context) {

//    Log.d("sendReminder", "sendReminder: $reminderString")

    val time = data.substring(1, 25)
    val title = data.substring(27, data.length - 1)

    val builder = AlertDialog.Builder(context)
    builder.setTitle("Set Reminder")
    builder.setMessage("Do you want to set a reminder for $title at $time?")
    builder.setPositiveButton("Yes") { dialog, which ->
        // Code to set the reminder
        dialog.dismiss()
        val db = FirebaseDatabase.getInstance()
        val auth = Firebase.auth
        val currentUser = auth.currentUser
        val userId = currentUser?.uid
        val TAG = "sendReminder"

        val reminder = hashMapOf(
            "title" to title,
            "time" to time,
        )
        if (userId != null) {
            db.getReference("schedule").child(userId).setValue(reminder)
                .addOnSuccessListener {
                    Log.d(TAG, "Reminder added.")
                }
                .addOnFailureListener {
                    Log.d(TAG, "Failed to add reminder.")
                }
        }

    }
    builder.setNegativeButton("No") { dialog, which ->
        dialog.dismiss()
    }
    builder.show()
}