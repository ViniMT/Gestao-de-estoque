import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API do sistema de gestão de estoque')
    .setDescription('Gestão de estoque Fábrica de Roupas')
    .setVersion('1.0') // Versão
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document); // URL para acessar a documentação Swagger
  // Habilita a validação global
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforma o payload para o tipo do DTO
      whitelist: true, // Remove propriedades não especificadas no DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((error) => {
  console.error('Erro durante a inicialização da aplicação:', error);
});
