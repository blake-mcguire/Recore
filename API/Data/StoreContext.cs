using System;
using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data;



public class StoreContext(DbContextOptions options) : DbContext(options) // Establishing a connection to the database via the DbContext
{
    public required DbSet<Product> Products {get; set;} // Instantiated a DbSet of type product named products
}