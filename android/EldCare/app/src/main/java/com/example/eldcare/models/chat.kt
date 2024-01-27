package com.example.eldcare.models

data class ChatRequest(val input_text: String)
data class ChatResponse(val message: String, val chat: String)