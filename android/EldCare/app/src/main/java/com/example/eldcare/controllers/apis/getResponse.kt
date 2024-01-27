package com.example.eldcare.controllers.apis

import android.util.Log
import com.example.eldcare.models.ChatRequest
import com.example.eldcare.models.ChatResponse
import com.google.firebase.Firebase
import com.google.firebase.auth.auth
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

val retrofit = Retrofit.Builder()
    .baseUrl("http://10.0.2.2:5000/")
    .addConverterFactory(GsonConverterFactory.create())
    .build()

val api = retrofit.create(ChatAPI::class.java)

fun getResponse(user_input: String, callback: (ChatResponse?) -> Unit) {
    val auth = Firebase.auth
    val user = auth.currentUser
    val userId = user?.uid ?: "0"
    val chatRequest = ChatRequest(user_input, userId)
    val call = api.getChat(chatRequest)

    call.enqueue(object : Callback<ChatResponse> {
        override fun onResponse(call: Call<ChatResponse>, response: Response<ChatResponse>) {
            if (response.isSuccessful) {
                val chatResponse = response.body()
                if (chatResponse != null) {
                    Log.d("HTTPSuccess", chatResponse.chat)
                    callback(chatResponse)
                }
            } else {
                Log.d("HTTPFail", "Response not successful. Error code: ${response.code()}, Error message: ${response.errorBody()?.string()}")
            }
        }

        override fun onFailure(call: Call<ChatResponse>, t: Throwable) {
            Log.d("HTTPFail1", t.toString())
        }
    })
}