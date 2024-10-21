package com.example.eldcare.ui.locations

import android.annotation.SuppressLint
import android.app.Notification
import android.app.PendingIntent
import android.app.Service
import android.content.Context
import android.content.Intent
import android.location.Location
import android.os.IBinder
import android.widget.Toast
import androidx.core.app.NotificationCompat
import com.example.eldcare.MainActivity
import com.google.android.gms.location.LocationRequest
import com.google.android.gms.location.LocationServices
import com.google.android.gms.tasks.CancellationToken
import com.google.android.gms.tasks.CancellationTokenSource
import com.google.android.gms.tasks.OnTokenCanceledListener


@SuppressLint("MissingPermission")
fun GetLocation(context: Context, onLocationReceived: (Double, Double) -> Unit) {

    val fusedLocationClient = LocationServices.getFusedLocationProviderClient(context)

    fusedLocationClient.getCurrentLocation(LocationRequest.PRIORITY_HIGH_ACCURACY, object : CancellationToken() {
        override fun onCanceledRequested(p0: OnTokenCanceledListener) = CancellationTokenSource().token

        override fun isCancellationRequested() = false
    })
        .addOnSuccessListener { location: Location? ->
            if (location == null)
                Toast.makeText(context, "Cannot get location.", Toast.LENGTH_SHORT).show()
            else {
                val lat = location.latitude
                val lon = location.longitude
                onLocationReceived(location.latitude, location.longitude)
            }
        }
}