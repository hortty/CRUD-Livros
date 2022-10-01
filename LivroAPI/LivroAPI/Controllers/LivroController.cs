using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LivroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LivroController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Livro>>> GetLivro()
        {
            return new List<Livro>
            {
                new Livro
                {
                    titulo_produto = "Harry Poter Calice de Fogo",
                    descricao_produto = "Livro bom",
                    preco_produto = 78.89,
                    id = 75
                }
            };
        }
    }
}
