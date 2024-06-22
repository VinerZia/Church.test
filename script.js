const jsonStr = JSON.stringify({ site: 'bobbyhadz.com' });
JSON.parse(jsonStr); // No error

$(document).ready(() => {
  $('.login-form').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          dataType: "json", // Automatically parses the response as JSON
          timeout: 500,
          url: '/src/login.php',
          data: $(this).serialize(),
          success: (data) => {
              console.log(data); // No need for JSON.parse
          },
          error: (data) => {
            console.log(data);

          }
      });
  });
});
