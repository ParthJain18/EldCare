package com.example.eldcare.controllers.apis
import com.example.eldcare.models.ChatRequest
import com.example.eldcare.models.ChatResponse
import com.example.eldcare.models.Message
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST


interface ChatAPI {
    @POST("/")
    fun getChat(@Body chatRequest: String): Call<ChatResponse>
}