











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


















