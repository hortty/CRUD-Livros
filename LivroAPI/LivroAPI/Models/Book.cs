using System;

public class Book
{
	public Book(int id, string nome, string descricao)
	{
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
	}

    public int id{ get; set; }

    public string nome { get; set; }

    public string descricao { get; set; }

}
