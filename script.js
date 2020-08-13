
      function countdownTimer() {
        const difference = +new Date("2021-01-01") - +new Date();
        let remaining = "Time's up!";

        if (difference > 0) {
          const parts = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            h: Math.floor((difference / (1000 * 60 * 60)) % 24),
            min: Math.floor((difference / 1000 / 60) % 60),
            sec: Math.floor((difference / 1000) % 60)
          };

          remaining = Object.keys(parts)
            .map(part => {
              if (!parts[part]) return;
              return `${parts[part]} ${part}`;
            })
            .join(" ");
        }

        document.getElementById("countdown").innerHTML = remaining;
      }

      countdownTimer();
      setInterval(countdownTimer, 1000);

      const navSlide = ()=> {
          const burger = document.querySelector(".burger");
          const nav = document.querySelector(".nav-links");

          burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
          });
      }

      navSlide();