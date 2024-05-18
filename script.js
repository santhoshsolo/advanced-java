document.addEventListener("DOMContentLoaded", function() {
    const decrementBtn = document.getElementById("decrementBtn");
    const incrementBtn = document.getElementById("incrementBtn");
    const clearBtn = document.getElementById("clearBtn");
    const counter = document.getElementById("counter");
    const error = document.getElementById("error");

    incrementBtn.addEventListener("click", function() {
        let count = parseInt(counter.innerHTML);
        count += 1;
        counter.innerHTML = count;
        if (count > 0) {
            error.style.display = "none";
        }
        if (count > 1) {
            clearBtn.style.display = "block";
        }
    });

    decrementBtn.addEventListener("click", function() {
        let count = parseInt(counter.innerHTML);
        if (count > 0) {
            count -= 1;
            counter.innerHTML = count;
            if (count === 0) {
                clearBtn.style.display = "none";
            }
        } else {
            error.style.display = "block";
        }
    });

    clearBtn.addEventListener("click", function() {
        counter.innerHTML = 0;
        clearBtn.style.display = "none";
        error.style.display = "none";
    });
});