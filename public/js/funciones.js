const validateForm = () => {
    const validateDepartingResult = validateDeparting();
    const validateReturningResult = validateReturning();
  
    if (validateDepartingResult && validateReturningResult) {
     
      console.log("Formulario válido");
    }
  };
  
  const validateDeparting = () => {
    let departing = new Date(document.getElementById('departing').value);
    let returning = new Date(document.getElementById('returning').value);
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    
    if (departing <= currentDate) {
      let texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La fecha departing es menor a la actual</span>';
      document.getElementById('texto').innerHTML = texto;
      return false;

    } else if (departing  > returning) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La fecha departing  es mayor a la fecha returning.</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
    } else {
      document.getElementById('texto').innerHTML = '';
      return true;
    }
  };
  
  const validateReturning = () => {
    let returning = new Date(document.getElementById('returning').value);
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    if(returning <= currentDate) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La fecha returning es menor a la actual</span>';
        document.getElementById('texto2').innerHTML = texto;
        return false;
    } else {
      document.getElementById('texto2').innerHTML = '';
      return true;
    }
  };
  
  exports.validateForm = validateForm;
  