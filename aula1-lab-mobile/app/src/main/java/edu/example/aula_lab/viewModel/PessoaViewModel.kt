package edu.example.aula_lab.viewModel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import edu.example.aula_lab.roomDB.Pessoa
import kotlinx.coroutines.launch

class PessoaViewModel(private val repository: Repository): ViewModel() {
    fun upsertPessoa(pessoa: Pessoa) {
        viewModelScope.launch {
            repository.upsertPessoa(pessoa)
        }
    }
}