package com.example.eldcare

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.work.PeriodicWorkRequestBuilder
import androidx.work.WorkManager
import com.example.eldcare.ui.features.chat.ChatScreen
import com.example.eldcare.ui.locations.LocationWorker
import com.example.eldcare.ui.navigation.AppNavigator
import com.example.eldcare.ui.theme.EldCareTheme
import java.util.concurrent.TimeUnit

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            EldCareTheme {
                AppNavigator()
            }
        }

        val workRequest = PeriodicWorkRequestBuilder<LocationWorker>(15, TimeUnit.MINUTES).build()
        WorkManager.getInstance(this).enqueue(workRequest)
    }
}
