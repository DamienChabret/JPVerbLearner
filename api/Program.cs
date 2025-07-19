var builder = WebApplication.CreateBuilder(args);

// Ajoute les services MVC (contrôleurs)
builder.Services.AddControllers();

// Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure le pipeline HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Mappe les routes des contrôleurs
app.MapControllers();

app.Run();
