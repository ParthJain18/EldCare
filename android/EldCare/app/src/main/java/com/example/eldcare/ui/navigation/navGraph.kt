package com.example.eldcare.ui.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.eldcare.ui.auth.LoginScreen
import com.example.eldcare.ui.auth.SignUpScreen
import com.google.firebase.Firebase
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.auth

private lateinit var auth: FirebaseAuth

@Composable
fun AppNavigator() {


    auth = Firebase.auth
    val currentUser = auth.currentUser

    val startingScreen = if (currentUser == null) {
        "LogInScreen"
    } else {
        "navDrawer"
    }
    val navController = rememberNavController()
    NavHost(navController, startDestination = startingScreen) {
        composable("LogInScreen") {
            LoginScreen(
                onLogIn = {
                    navController.popBackStack()
                    navController.navigate("NavDrawer")
                },
                onSignUp = {
                    navController.popBackStack()
                    navController.navigate("SignUpScreen")
                })
        }
        composable("SignUpScreen") {
            SignUpScreen(onNavigate = {
                navController.popBackStack()
                navController.navigate("NavDrawer")
            })
        }
        composable("NavDrawer")
        {
            NavigationDrawer(
                onLogOut = {
                    navController.popBackStack()
                    navController.navigate("LogInScreen")
            })
        }
    }
}