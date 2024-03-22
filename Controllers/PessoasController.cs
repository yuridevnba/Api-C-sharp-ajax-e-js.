﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class PessoasController : Controller
    {

        private readonly Contexto _contexto;

        public PessoasController(Contexto contexto)
        {
            _contexto = contexto;
        }
        // GET: PessoasController
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public async Task<JsonResult> PegarTodos()
        {
            return Json(await _contexto.Pessoas.ToListAsync());
        }

    }
}
