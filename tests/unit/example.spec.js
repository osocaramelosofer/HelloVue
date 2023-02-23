describe('Example Component', () => {
  test( 'Debe de ser mayor a 10', () => {
    
    // Arrange - Arreglar 
    let value = 5;

    // Act - Estimulo
    value = value + 6
    // Assert - Observar el resultado
    expect( value ).toBeGreaterThan(10)

  })
})