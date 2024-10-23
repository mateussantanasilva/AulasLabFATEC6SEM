package edu.example.aula_lab.viewModel

import edu.example.aula_lab.roomDB.Pessoa
import edu.example.aula_lab.roomDB.PessoaDataBase

class Repository(private val db: PessoaDataBase) {
    suspend fun upsertPessoa(pessoa: Pessoa) {
        db.PessoaDAO().upsertPessoa(pessoa)
    }

    suspend fun deletePessoa(pessoa: Pessoa) {
        db.PessoaDAO().deletePessoa(pessoa)
    }

    fun getAllPessoas(): List<Pessoa> {
        return db.PessoaDAO().getAllPessoas()
    }
}