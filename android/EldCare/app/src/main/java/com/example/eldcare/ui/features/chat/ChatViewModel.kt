package com.example.eldcare.ui.features.chat

import android.util.Log
import android.widget.Toast
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.eldcare.models.Message
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.GenericTypeIndicator
import com.google.firebase.database.ValueEventListener
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class ChatViewModel : ViewModel() {
    private val _messages = MutableStateFlow<List<Message>>(emptyList())
    val messages: StateFlow<List<Message>> get() = _messages


    fun sendMessage(message: String, isSentByUser: Boolean) {
        // Add logic to handle sending the message, e.g., API call or local processing.
        val updatedMessages = _messages.value.toMutableList().apply {
            add(Message(content = message, isSentByUser = isSentByUser))
//            add(Message(content = "Hello, how can I help you?", isSentByUser = false))
        }
        _messages.value = updatedMessages
    }

}