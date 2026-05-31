
            window.calcRetire = function() {
                const age = parseInt(document.getElementById('ret-age').value || 30);
                const goal = parseFloat(document.getElementById('ret-goal').value || 1000000);
                const res = document.getElementById('ret-res');
                const years = 65 - age;
                const monthlyNeeded = (goal / (years * 12 * 1.08)).toFixed(2);
                res.innerHTML = `Assuming 8% Return: Save <strong>$${monthlyNeeded}/month</strong> for ${years} years.`;
            }
            calcRetire();
        