document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем все выбранные предпочтения по напиткам
    const drinkPreferences = Array.from(document.querySelectorAll('input[name="Drinks"]:checked'))
                                .map(checkbox => checkbox.value)
                                .join(', '); // Объединяем выбранные значения в строку с разделителем ", "

    // Получаем все выбранные предпочтения по еде
    const foodPreferences = Array.from(document.querySelectorAll('input[name="FoodPreferences"]:checked'))
                                .map(checkbox => checkbox.value)
                                .join(', '); // Объединяем выбранные значения в строку с разделителем ", "

    // Добавляем полученные строки к данным формы
    const formData = new FormData(document.querySelector('form'));
    formData.set('Drinks', drinkPreferences); // Используем set() чтобы установить значение поля, а не append()
    formData.set('FoodPreferences', foodPreferences); // Используем set() чтобы установить значение поля, а не append()

    // Отправляем данные на сервер
    fetch(document.querySelector('form').action, {
      method: document.querySelector('form').method,
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Данные успешно отправлены
        console.log('Данные успешно отправлены');
        
        // Делаем кнопку неактивной и меняем её цвет на серый
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '#ccc';
      } else {
        // Обработка ошибки отправки данных
        console.error('Произошла ошибка при отправке данных');
      }
    })
    .catch(error => {
      // Обработка ошибок при выполнении запроса
      console.error('Произошла ошибка:', error);
    });
  });
});
