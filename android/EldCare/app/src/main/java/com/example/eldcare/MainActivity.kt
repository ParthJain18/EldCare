package com.example.eldcare

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.example.eldcare.ui.features.chat.ChatScreen
import com.example.eldcare.ui.navigation.AppNavigator
import com.example.eldcare.ui.theme.EldCareTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            EldCareTheme {
                AppNavigator()
            }
        }
    }
}
