export function mega(quantity = 6, numbers = []) {
    quantity = +quantity; //Transformar em int

    if (quantity >= 6 && quantity <= 25) {
        let i = 1;

        while (i <= quantity) {
            const randomNumber = parseInt(Math.random() * 60) + 1;

            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber); 
                i++;
            }
        }

        return numbers.sort((n1, n2) => n1 - n2);
    } else {
        return 'A quantidade de números tem que ser entre 6 e 25!';
    }
}