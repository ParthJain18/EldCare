package com.example.eldcare.ui.features.chat

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Send
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.eldcare.R
import com.example.eldcare.controllers.apis.getResponse
import com.example.eldcare.ui.CustomTopAppBar
import com.example.eldcare.ui.MessageCard
import com.example.eldcare.ui.features.reminders.sendReminder
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@Preview(backgroundColor = 0xFFFFFFFF)
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ChatScreen(viewModel: ChatViewModel = viewModel(), onNavIconClick: () -> Unit = {}) {
    val messages = viewModel.messages.collectAsState()
    val listState = rememberLazyListState()



    CustomTopAppBar(
        title = stringResource(R.string.eld_care),
        navIcon = {
            IconButton(
                onClick = { onNavIconClick() },
                modifier = Modifier
                    .padding(horizontal = 12.dp)
            ) {
                Icon(
                    imageVector = Icons.Filled.Menu,
                    contentDescription = "Back",
                    modifier = Modifier.size(30.dp)
                )
            }
        },
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(MaterialTheme.colorScheme.surface)
        ) {
            LazyColumn(
                modifier = Modifier
                    .weight(1f),
                verticalArrangement = Arrangement.Bottom,
                state = listState,
            ) {
                items(messages.value.size) { index ->
                    MessageCard(
                        message = messages.value[index]
                    )
                }
            }
            ChatTextField(viewModel = viewModel)
        }
    }
    LaunchedEffect(key1 = messages.value) {
        delay(100)
        if (messages.value.isEmpty()) return@LaunchedEffect
        listState.animateScrollToItem(index = messages.value.size - 1)
    }
}

@OptIn(DelicateCoroutinesApi::class)
@Composable
fun ChatTextField(viewModel: ChatViewModel) {
    var newMessage by remember { mutableStateOf("") }
    val context = LocalContext.current

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
            .background(Color.Transparent)
        ,
        verticalAlignment = Alignment.Bottom
    ) {
        OutlinedTextField(
            value = newMessage,
            onValueChange = { newMessage = it },
            modifier = Modifier
                .weight(1f)
                .padding(8.dp),
            shape = RoundedCornerShape(100.dp),
            placeholder = { Text(stringResource(R.string.type_a_message)) }
        )
        IconButton(
            onClick = {
                val msg = newMessage.trim()
                if (msg.isBlank()) return@IconButton
                GlobalScope.launch {
                    val response = getResponse(msg){
                        if (it == null) return@getResponse
                        if (it.chat.startsWith("[")){
                                sendReminder(it.chat, context)
                                return@getResponse
                            }
                        viewModel.sendMessage(it.chat, false)
                    }
                    // Use the response here
                }
                viewModel.sendMessage(msg, true)
                newMessage = ""
            },
            modifier = Modifier
                .clip(CircleShape)
                .align(Alignment.CenterVertically)
                .background(MaterialTheme.colorScheme.primary)
            ,
        ) {
            Icon(
                imageVector = Icons.Filled.Send,
                contentDescription = "Send",
                modifier = Modifier
                    .fillMaxSize()
                    .padding(8.dp),
                tint = MaterialTheme.colorScheme.onPrimary
            )
        }
    }
}