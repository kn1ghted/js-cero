// Book Stack that allow to add, remove or view a book stack

// Book cart variable, initialized as empty
let bookCart=[]

// Constant values to store possible stack actions
const ADD_TO_CART_ACTION='addToCart'
const REMOVE_FROM_CART_ACTION='removeFromCart'
const VIEW_CART_ACTION='viewCart'

// Function to view array contents
function viewCart() {
    console.log('Current Cart of Books: ',bookCart)
}

// Main function to perform an action on the array
function performCartActions(action, newBook) {
    switch(action){
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length === 0) {
                console.log('Cart is empty. No books to remove.')
            } else {
                const removedBook=bookCart.pop()
                console.log(`Removed book from the cart: ${removedBook}`)
            }
            break;
        case VIEW_CART_ACTION:
            viewCart()
            break;
        default:
            console.log('Invalid action. Please choose a vaid option.')
    }
}

performCartActions(ADD_TO_CART_ACTION,'Think like a monk')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION,'Ego is the enemy.')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)