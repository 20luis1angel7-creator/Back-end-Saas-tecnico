











📊 Estado actual de tu proyecto

# Tienes funcionando:

### Domain

Client
Plan
Expense

### Repository

ClientRepository
InMemoryClientRepository

### UseCases

CreateClient ✅
ActivateClient ✅ (solo typo)
SuspendClient (solo falta this)

Tests

21 tests
19 pasando
2 fallando por detalles

#### creamos el test de SuspendCient ####

Error: me dio un error en un mensaje que lo escribi mal 

# otro error:
tests/application/use-cases/client/SuspendClientUseCase.test.ts
## lo tenia asi:
await expect(usecase.execute)
  .rejects
  .toThrow("Client not found");
## y lo cambie:
await expect(usecase.execute("123"))
  .rejects
  .toThrow("Client not found");
- me dice que en lo demas estan pasando el id y que seguro se me olvido ponerlo


######  creamos deleteclientusecase
-para poder eliminar cliente activo pero que no tenga factura 
-no vive dentro de clientes porque: Eso es una regla que depende de otros agregados.

######   vamos agrecar en ClientRepository
no hay nada ahi dara error
agregamos: delete(id: string): Promise<void>;
-sirve para pder borrar clientes

######    inmemoryclientrepository 
agregamos eliminar

######  hicimos los test de deleteclientusecase
hicimos 3

######   hicimos get client by id usecase
sencillo
######   hicimo 2 test de get client by id usecase
2 test 

###### hicimos list clients usecase
luego hicimos 2 test

###### updateclient usecase

###### controller
- ahora vamos hacer los controller (web layer)
-ej: endpoint (POST, GET, PUT, DELETE)

hicimos server y rotes clientes

### order
- hicimos entities/Order.ts
status, getters, status(start, completed, cancelled)

- luego hicimos OrderRepository
- InMemoryOrderRepository
- modificamos createclientusecase
- modificamos ClientController
- OrderController
- creamos container y modificamos controller y order
- crear orderRotues
- arreglamos order.routes y ordercontroller (en postman en vez de salirme la informacion de PENDING, me salia [])

14/2/26
-agregamos start, complete en OrderController
- agregamos 2 patch en order.routes /:id/order
- cree StartOrderUseCase
- cree CancelOrderUseCase
- agregamos cancel en OrderController

15/2/26
- creamos un archivo para poner o agregar errores
- modificamos los errores en controller, order, uno en client
- arreglamos los test que deron muchos problema ( sobre que teniamos que implementar una creacion de orden el los test )

16/2/26
- creamos invoice en entities
- creamos invoiceRepository
- creamos GenerateMonthlyinvoicesUseCase

19/226

- modificamos client markwarning()
- modificamos invoiceRepository
- creamos UpdateOverdueInvoiceUseCase()
- creamos RecalculateClientStatusUseCase()
- creamos RegisterInvoicePaymentUseCase()

22/2/26

- creamos RegisterPaymentUseCase
- creamos InMemoryPaymentRepository
- intentando arreglar los test (+ 15 errores)
- movimos la web de infrestructura a presentation
- cree clientRoutes (se elimino cuando lo movi)

25/2/26

- creamos Material en entities
- creamos OrderMaterialUsge en entities
- creamos MaterialRepository
- creamos OrderMaterialUsageRepository
- creamos InMemoryMaterialRepository

26/2/26

- creamos orderMaterialUsage
- creamos RegisterMaterialUsageUseCase 

3/3/26

- cree planrepository
- arreglamos GenerateMonthlyinvoicesUseCase 
- arregle varios problema
- modifique container.ts
- creamos InMemoryPlanRepository 
- modificamos mas el container y arreglando mas errores
- cree InMemoryInvoiceRepository


4/3/26

- creamos invoicecontroller (generate)
- cree findByCliendId en inmemoryinvoicerepository
- hice varias cosas mas no recuerdo

5/3/26

- cree GetClientInvoiceUseCase
- agregue getClientInvoiceUseCase en el container
- creamos invoicecontroller (getClientInvoices)
- creamos invoicecontroller (payinvoice) y arreglando muchos errores

7/3/26

- cree los tres controllers que faltavan
- arregle algunos errores
- cree getInvoiceByIdUseCase
- modifique barios archivo y agregue algo en el container
- hice GetPaymentByInvoiceUseCase
- hice controllers y routes
- tambien agregue varias cosas en el container

8/3/29

- dure 3 hora haciendo createplanusecase
- modifico la ia inmemoryplanrepository  (estudiarlo)
- cree CreatePlan, DeactivatePlan, GetPlanById, ListPlans, UpdatePlan en usecase (estudiarlo y lo hice rapido yo solo: solo la ia me dio los pasos y ya)

9/3/26

- agregue los usecase de plan en el container
- hice yo plan controller


10/3/26

- hice ExpenseRepository
- hice CreateExpenseUseCase
- hice ListExpensesUseCase
- hice GetExpenseByIdUseCase

















-- falta el pdf en las facturas

- Expense
usecase: agregar gastos(automatico o como sea), ver expense detallado y total, 
repository: 
inmemory: 
controller:
router:


- material
usecase: 
controller:
router:


- SERVER
















































































Falta en el backend
- Módulos / capas

ExpenseController
expense.routes.ts
Use cases de Expense si no los has hecho completos
Validar si Material ya tiene controller + routes; si no, faltan
Validar si Plan ya quedó conectado en server.ts; si no, falta registrar rutas
Validar si Payment ya quedó conectado en server.ts; si no, falta registrar rutas
Validar si Invoice ya quedó conectado en server.ts; si no, falta registrar rutas

- Infraestructura

Base de datos real (sigues con InMemory)
Repositorios reales para DB
Variables de entorno bien organizadas
Middleware global de errores
Validación de requests
Logs

- Seguridad

Autenticación
Autorización / roles
Middleware de permisos

- Calidad

Tests unitarios
Tests de integración
Documentación de API (Swagger/OpenAPI)
Manejo consistente de errores HTTP
Paginación y filtros en listados

- Posibles módulos que aún faltan cerrar

Expense
Material (si no tiene controller/routes)
conexión completa de todas las rutas en server.ts
revisar comentarios, typos y nombres inconsistentes en archivos/rutas/controladores













