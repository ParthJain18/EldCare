package com.example.eldcare.ui.locations

import android.content.Context
import android.util.Log
import androidx.work.Worker
import androidx.work.WorkerParameters
import com.example.eldcare.ui.locations.GetLocation
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.FirebaseDatabase

private lateinit var auth: FirebaseAuth

class LocationWorker(appContext: Context, workerParams: WorkerParameters):
    Worker(appContext, workerParams) {

    override fun doWork(): Result {
        GetLocation(applicationContext) { lat, lon ->
            // Update the location in the database
            auth = FirebaseAuth.getInstance()
            val userId = auth.currentUser?.uid.toString()

            val database = FirebaseDatabase.getInstance()
            val myRef = database.getReference("location").child(userId)
            myRef.setValue("$lat, $lon")
            Log.d("LocationWorker", "Location updated to $lat, $lon")
        }
        return Result.success()
    }
}