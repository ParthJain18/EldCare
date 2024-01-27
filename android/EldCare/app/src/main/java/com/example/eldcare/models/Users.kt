package com.example.eldcare.models

data class Users(
    val name: String,
    val email: String,
    val phoneNumber: String,
    val password: String,
    val userType: String = "Elderly",
)