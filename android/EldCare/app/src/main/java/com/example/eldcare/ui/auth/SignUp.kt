package com.example.eldcare.ui.auth

import android.widget.Toast
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.ArrowBack
import androidx.compose.material.icons.outlined.Email
import androidx.compose.material.icons.outlined.Lock
import androidx.compose.material.icons.outlined.Person
import androidx.compose.material.icons.outlined.Phone
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment.Companion.CenterVertically
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.eldcare.R
import com.example.eldcare.controllers.signupFirebase
import com.example.eldcare.models.Users
import com.example.eldcare.ui.CircularLoader
import com.example.eldcare.ui.CustomButton
import com.example.eldcare.ui.CustomCard
import com.example.eldcare.ui.CustomSurface
import com.example.eldcare.ui.CustomTextField

@Composable
fun SignUpScreen(modifier: Modifier = Modifier, onNavigate: () -> Unit = {}) {

    var userEmail by remember { mutableStateOf("") }
    var userPass by remember { mutableStateOf("") }
    var userPass2 by remember { mutableStateOf("") }
    var phoneNumber by remember { mutableStateOf("") }
    var name by remember { mutableStateOf("") }
//    var isLoading by remember {
//        mutableStateOf(false)
//    }

    val context = LocalContext.current

    CustomSurface(
        modifier = Modifier,
        {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(10.dp),
                verticalAlignment = CenterVertically
            ) {
                IconButton(onClick = { onNavigate() }) {
                    Icon(
                        imageVector = Icons.Outlined.ArrowBack,
                        contentDescription = "Back",
                        modifier = Modifier.size(30.dp)
                    )
                }
                Text(
                    text = stringResource(R.string.sign_up),
                    fontSize = 25.sp,
                    modifier = Modifier.padding(30.dp),
                    fontWeight = FontWeight.Bold
                )
            }

            CustomCard(
                modifier = Modifier.padding(5.dp),
                {
                    CustomTextField(
                        modifier = Modifier.padding(10.dp),
                        value = name,
                        onValueChange = { name = it },
                        label = stringResource(R.string.name),
                        leadingIcon = Icons.Outlined.Person,
                        keyboardType = KeyboardType.Text
                    )

                    CustomTextField(
                        modifier = Modifier.padding(10.dp),
                        value = userEmail,
                        onValueChange = { userEmail = it },
                        label = stringResource(R.string.email),
                        leadingIcon = Icons.Outlined.Email,
                        keyboardType = KeyboardType.Email
                    )

                    CustomTextField(
                        modifier = Modifier.padding(10.dp),
                        value = phoneNumber,
                        onValueChange = { phoneNumber = it },
                        label = stringResource(R.string.phone_number),
                        leadingIcon = Icons.Outlined.Phone,
                        keyboardType = KeyboardType.Phone
                    )

                    CustomTextField(
                        modifier = Modifier.padding(10.dp),
                        value = userPass,
                        onValueChange = { userPass = it },
                        label = stringResource(R.string.password),
                        leadingIcon = Icons.Outlined.Lock,
                        keyboardType = KeyboardType.Password,
                        visualTransformation = PasswordVisualTransformation()
                    )

                    CustomTextField(
                        modifier = Modifier.padding(10.dp),
                        value = userPass2,
                        onValueChange = { userPass2 = it },
                        label = stringResource(R.string.confirm_password),
                        leadingIcon = Icons.Outlined.Lock
                    )


                    CustomButton(
                        modifier = Modifier.padding(10.dp),
                        onClick = {
                            if (userPass != userPass2) {
                                Toast.makeText(context, "Passwords do not match", Toast.LENGTH_SHORT).show()
                                return@CustomButton
                            }
                            val user = Users(
                                name = name,
                                email = userEmail,
                                phoneNumber = phoneNumber,
                                password = userPass
                            )
//                            isLoading = true
                            signupFirebase(userObj = user, context = context) { success ->
                                if (success) {
                                    onNavigate()
                                }
//                                else {
//                                    isLoading = false
//                                }
                            }
//                            onNavigate()
                        }
                    ) {
//                        if (isLoading) {
//                            CircularLoader()
//                        } else {
                            Text(text = stringResource(R.string.sign_up))
//                        }
                    }
                }
            )
        }
    )
}


@Preview
@Composable
fun PreviewSignUpScreen() {
    SignUpScreen()
}