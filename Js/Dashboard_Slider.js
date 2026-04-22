
const Dashboard_Slider_Left = document.getElementById("DashBoard_Slider_Left");

const Dashboard_Slider_Right = document.getElementById("DashBoard_Slider_Right"); 

//console.log(Dashboard_Slider_Left);

//console.log(Dashboard_Slider_Right);

const Slider = document.getElementById("Slider");

const Slider_Buttons = Array.from(document.querySelectorAll(".Slider_Buttons"));

//Slider_Buttons.map((button) => console.log(button));

let isAnimating = false;



Slider.scrollLeft = 1 * Slider.clientWidth



// Add click event listener to each button
Slider_Buttons.forEach((button, clickedIndex) => 
{
    button.addEventListener("click", function(event) 
    {
        event.preventDefault();

        // Prevent multiple animations at once
        if (isAnimating) return;
        isAnimating = true;

        // When a button is clicked, all buttons up to that index stay on the left
        // and any buttons after that index collapse onto the right slider.

        Slider_Buttons.forEach((btn, idx) => 
        {
            
            if (idx <= clickedIndex) 
            {
                Dashboard_Slider_Left.appendChild(btn);
                btn.classList.add("focused"); // mark focused
            } else 
            {
                Dashboard_Slider_Right.appendChild(btn);
                btn.classList.remove("focused");
            }
        });

        

        // Scroll slider to the corresponding slide based on button index
        
        const slideWidth = Slider.clientWidth;
        
        // Smooth scroll to the target slide
        Slider.scrollLeft = clickedIndex * slideWidth;
        
        // Re-enable button clicks after animation completes (400ms default smooth scroll duration)
        setTimeout(() => {
            isAnimating = false;
        }, 400);

        
    });
});