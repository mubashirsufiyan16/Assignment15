// question 1

let StudentName=[]
console.log(StudentName)

// question 2

let Student_names=new Array();
console.log(Student_names)

// question 3

let my_name=["Mubashir"]
console.log(my_name)

//question 4 
let age=[22]
console.log(age)

// question 5
let boolean=[true,false]
console.log(boolean)

// question 6
let mix_arr=["mubashir",22,true,5.3,undefined]
console.log (mix_arr)

// question 7
let eduction=new Array()
eduction=["HSC","SSC","BCS","BS","BCOM","MS","M.PHIL,","PHD"]
console.log(eduction)

// question 8
let Student_name=["micheal","John","Tony"];
let StudentScores=[320,230,480];
let TotalMarks=500;
console.log(`Score or ${Student_name[0]} is ${StudentScores[0]}. Percentage ${StudentScores[0]/TotalMarks*100} `)
console.log(`Score or ${Student_name[1]} is ${StudentScores[1]}. Percentage ${StudentScores[1]/TotalMarks*100} `)
console.log(`Score or ${Student_name[2]} is ${StudentScores[2]}. Percentage ${StudentScores[2]/TotalMarks*100} `)


//question 8 from user input 
let StudentNames=[prompt("Enter Your Name")]
let score=[prompt("Enter Your Obtained Marks")]
let Total_Marks=500
alert(`Score of ${StudentNames} is ${score} and percentage is ${score/Total_Marks*100}`)

// question 9
let colors = ["red", "blue", "green"]
alert(colors)
// add beginning color
let addColor = prompt("What color u wants to add to the beginning")
colors.unshift(addColor)
alert(colors)
// add at the end
let endColor = prompt("What color u wants to add to the end")
colors.push(endColor);
alert(colors)
// // add new color
colors.unshift('gray')
alert(colors)
// add new color
colors.unshift('cyan')
alert(colors)
console.log(colors)
//delete first colors
colors.shift(colors)
alert(colors)
console.log(colors)
//delete last color
alert(colors)
colors.pop(colors)

let index = prompt("Which index u want to add a color?")
let colorName = prompt("Which colour u want to add")
colors.splice(index, 0, colorName)
alert(colors)
console.log(colors)

let delete_index = Number(prompt("Which index u want to delete"))
let deleteCount = Number(prompt("How many colors u want to delete"))
colors.splice(delete_index, deleteCount)
alert(colors)
console.log(colors)


// question 10

let StudentScore = [320, 230, 480, 120, 240]

console.log(StudentScore)

alert(`Unsorted array = ${StudentScore}`)

console.log(StudentScore.sort())

alert(`Sorted array = ${StudentScore.sort()}`)

// question 11
let Cities = ["karachi", "lahore", "Islamabad", "Quetta", "Peshawar"]
console.log(Cities)

alert(`cities List = ${Cities}`)

let SelectedCities = Cities.slice(2, 4)

console.log(SelectedCities)

alert(`Selected Cities List = ${SelectedCities}`)

// question 12
let new_arr = ["This", "is", "my", "cat"]
console.log(typeof (new_arr))
alert(new_arr)
let str = new_arr.join(" ")
console.log(typeof (str))
alert(str)

// question 13
let Arr = []
Arr.push(prompt("Enter 1 Device Name"))
alert(`Add ${Arr}`)
Arr.push(prompt("Enter 2 Device Name"))
alert(`Add ${Arr}`)
Arr.push(prompt("Enter 3 Device Name"))
alert(`Add ${Arr}`)
Arr.push(prompt("Enter 4 Device Name"))

alert(`Add ${Arr}`)

console.log(Arr)

Arr.shift(`out ${Arr[0]}`)
alert(Arr)
Arr.shift(`out ${Arr[0]}`)
alert(Arr)
Arr.shift(`out ${Arr[0]}`)
alert(Arr)
Arr.shift(`out ${Arr[0]}`)
alert(Arr)
alert(`out = ${Arr[0]}`)
alert(`out = ${Arr[0]}`)

// question 14
let arr = ["Keyboard", "mouse", "Printer", "Monitor"]
console.log(arr)
alert(arr.pop(0))
console.log(arr)
alert(arr.pop(0))
console.log(arr)
alert(arr.pop(0))
console.log(arr)
alert(arr.pop(0))
console.log(arr)

// question 15

let phone = ["Apple", "Samsung", "motrolla", "Nokia", "Sony", "haier"]

document.write("<select>")
document.write("<option disabled selected> Dropdown </option>")
document.write("<option>" + phone[0] + "</option>")
document.write("<option>" + phone[1] + "</option>")
document.write("<option>" + phone[2] + "</option>")
document.write("<option>" + phone[3] + "</option>")
document.write("<option>" + phone[4] + "</option>")
document.write("<option>" + phone[5] + "</option>")

document.write("</select>");
