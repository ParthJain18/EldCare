package com.example.eldcare.ui.auth

//write code for a basic login screen using the components in the ui folder

import android.widget.Toast
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.eldcare.R
import com.example.eldcare.controllers.loginFirebase
import com.example.eldcare.ui.CircularLoader
import com.example.eldcare.ui.CustomButton
import com.example.eldcare.ui.CustomCard
import com.example.eldcare.ui.CustomSurface
import com.example.eldcare.ui.CustomTextField

@Composable
fun LoginScreen(modifier: Modifier = Modifier, onLogIn: () -> Unit = {}, onSignUp: () -> Unit = {}) {

    var userName by remember { mutableStateOf("") }
    var userPass by remember { mutableStateOf("") }
//    var isLoading by remember {
//        mutableStateOf(true)
//    }

    val context = LocalContext.current

    CustomSurface (
        modifier = Modifier,
        {
            Text(
                text = stringResource(R.string.welcome_text),
                fontSize = 30.sp,
                modifier = Modifier.padding(30.dp),
                textAlign = TextAlign.Center
            )

            CustomCard(
                modifier = Modifier.padding(30.dp),
                {
                    Text(
                        text = stringResource(R.string.log_in),
                        fontSize = 25.sp,
                        modifier = Modifier.padding(30.dp),
                        fontWeight = FontWeight.Bold
                    )

                    Spacer(modifier = Modifier.height(20.dp))

                    CustomTextField(
                        value = userName,
                        onValueChange = { userName = it },
                        label = stringResource(R.string.user_name),
                        modifier = Modifier.fillMaxWidth(),
                        keyboardType = KeyboardType.Email
                    )

                    Spacer(modifier = Modifier.height(20.dp))

                    CustomTextField(
                        value = userPass,
                        onValueChange = { userPass = it },
                        label = stringResource(R.string.password),
                        modifier = Modifier.fillMaxWidth(),
                        visualTransformation = PasswordVisualTransformation()
                    )

                    Spacer(modifier = Modifier.height(20.dp))

                    CustomButton(
                        modifier = Modifier.fillMaxWidth(),
                        onClick = {
                            if (userName == "" || userPass == "") {
                                Toast.makeText(context, "Please enter email and password", Toast.LENGTH_SHORT).show()
                                return@CustomButton
                            }
//                            isLoading = true
                            loginFirebase(userName, userPass, context) {
                                if (it) {
                                    onLogIn()
                                }
//                                isLoading = false
                            }

                        }
                    ) {
//                        if (!isLoading) {
                            Text(
                                text = stringResource(R.string.log_in),
                                modifier.padding(horizontal = 10.dp, vertical = 5.dp),
                                fontSize = 20.sp
                            )
//                        }
//                        else {
//                            CircularProgressIndicator(
//                                modifier = Modifier
//                                    .padding(vertical = 5.dp)
//                                    .size(27.dp)
//                            )
//                        }
                    }

                    Spacer(modifier = Modifier.height(20.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.Center,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = stringResource(R.string.dont_have_an_account),
                            fontSize = 15.sp
                        )

                        Spacer(modifier = Modifier.width(5.dp))

                        Text(
                            text = stringResource(R.string.sign_up),
                            fontSize = 15.sp,
                            color = MaterialTheme.colorScheme.primary,
                            fontWeight = FontWeight.Bold,
                            modifier = Modifier.clickable {
                                onSignUp()
                            }
                        )
                    }

                    Spacer(modifier = Modifier.height(20.dp))

//                    if (isLoading) {
//                        CircularLoader(modifier = Modifier.size(50.dp))
//                    }
                }
            )
        }
    )
}

@Preview
@Composable
fun LoginScreenPreview() {
    LoginScreen()
}