package com.example.eldcare.ui.navigation

import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Divider
import androidx.compose.material3.DrawerValue
import androidx.compose.material3.ModalDrawerSheet
import androidx.compose.material3.ModalNavigationDrawer
import androidx.compose.material3.NavigationDrawerItem
import androidx.compose.material3.Text
import androidx.compose.material3.rememberDrawerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.eldcare.ui.features.chat.ChatScreen
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.launch

private lateinit var auth: FirebaseAuth

@Preview
@Composable
fun NavigationDrawer(onLogOut: () -> Unit = { }) {
    val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
    val scope = rememberCoroutineScope()

    ModalNavigationDrawer(
        drawerState = drawerState,
        drawerContent = {
            ModalDrawerSheet {
                Text("Drawer title", modifier = Modifier.padding(16.dp))
                Divider()
                NavigationDrawerItem(
                    label = { Text(text = "Log Out") },
                    selected = false,
                    onClick = {
                        auth = FirebaseAuth.getInstance()
                        auth.signOut()
                        onLogOut()
                    }
                )
                // ...other drawer items
            }
        }
    ) {
        ChatScreen(
            onNavIconClick = {
                scope.launch {
                    drawerState.apply {
                        if (isClosed) open() else close()
                    }
                }
            }
        )
    }
}