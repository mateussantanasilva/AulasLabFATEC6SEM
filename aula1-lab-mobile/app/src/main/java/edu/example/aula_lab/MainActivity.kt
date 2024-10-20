package edu.example.aula_lab

import android.os.Bundle
import android.print.PrintAttributes.Margins
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import edu.example.aula_lab.ui.theme.AulalabTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            AulalabTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    App()
                }
            }
        }
    }
}

@Composable
fun App() {
    Column(Modifier.background(Color.Black).fillMaxWidth().fillMaxHeight()) {
        Row(Modifier.fillMaxWidth().padding(40.dp), Arrangement.Center) {
            Text("Hello World", fontFamily = FontFamily.SansSerif, fontWeight = FontWeight.Bold, fontSize = 30.sp, color = Color.White)
        }
        Row(Modifier.fillMaxWidth(), Arrangement.Center) {
            Column(Modifier.fillMaxWidth(0.2f)) { Text("Nome:", color = Color.White, fontSize = 16.sp) }
            Column(Modifier.fillMaxWidth(0.8f)) {
                TextField(value = "", onValueChange = {}, label = {}, modifier = Modifier.height(15.dp))
            }
        }
        Row(Modifier.padding(12.dp)) {}
        Row(Modifier.fillMaxWidth(), Arrangement.Center) {
            Column(Modifier.fillMaxWidth(0.2f)) { Text("Telefone:", color = Color.White, fontSize = 16.sp) }
            Column(Modifier.fillMaxWidth(0.8f)) {
                TextField(value = "", onValueChange = {}, label = {}, modifier = Modifier.height(15.dp))
            }
        }
        Row(Modifier.padding(12.dp)) {}
        Row(Modifier.fillMaxWidth(), Arrangement.Center) {
            Button(onClick = {}) {
                Text("Cadastrar", color = Color.White, fontSize = 16.sp)
            }
        }
    }
}

// tudo que vai no preview, não é compilado, apenas vê no dev
@Preview
@Composable
fun AppPreview() {
    AulalabTheme {
        App()
    }
}