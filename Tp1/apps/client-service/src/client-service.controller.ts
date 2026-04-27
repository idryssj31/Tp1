import { Controller, Get, Param } from '@nestjs/common';
import { ClientServiceService } from './client-service.service';

@Controller()
export class ClientServiceController {
  constructor(private readonly clientServiceService: ClientServiceService) {}

  @Get()
  getHome(): string {
    return `
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TP1 Microservices gRPC</title>
    <style>
      :root {
        color-scheme: dark;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: Inter, Segoe UI, Roboto, Arial, sans-serif;
        background: radial-gradient(circle at top right, #1f2a44, #0b1020 60%);
        color: #e8ecf4;
      }
      .card {
        width: min(92vw, 720px);
        background: rgba(20, 27, 45, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 18px;
        padding: 28px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(4px);
      }
      h1 {
        margin: 0 0 10px;
        font-size: clamp(1.6rem, 2.8vw, 2.2rem);
      }
      p {
        margin: 8px 0;
        color: #c6d0e1;
        line-height: 1.5;
      }
      .badge {
        display: inline-block;
        margin-top: 6px;
        padding: 6px 10px;
        border-radius: 999px;
        background: rgba(96, 165, 250, 0.2);
        color: #b9d8ff;
        font-size: 0.9rem;
      }
      .links {
        margin-top: 18px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      a {
        color: #0b1020;
        background: #93c5fd;
        text-decoration: none;
        font-weight: 600;
        padding: 10px 14px;
        border-radius: 10px;
      }
      a.secondary {
        background: rgba(255, 255, 255, 0.15);
        color: #e8ecf4;
      }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>Hello World</h1>
      <p>TP1 NestJS en monorepo avec 2 microservices.</p>
      <p>Le <strong>client-service</strong> (HTTP) appelle le <strong>greeter-service</strong> (gRPC).</p>
      <span class="badge">gRPC + Docker + NestJS</span>
      <div class="links">
        <a href="/hello/Idryss">Tester /hello/Idryss</a>
        <a class="secondary" href="/hello/World">Tester /hello/World</a>
      </div>
    </main>
  </body>
</html>
    `;
  }

  @Get('hello/:name')
  async sayHello(@Param('name') name: string): Promise<{ message: string }> {
    return this.clientServiceService.sayHello(name);
  }
}
