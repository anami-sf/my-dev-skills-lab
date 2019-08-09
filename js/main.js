// add event listener new-skill
let skill;

const getSkill = (evt)=> {
    skill = evt.target.value
    evt.target.value  = ''
}

const submitSkill = (evt) => {
    $('ul').append(
        `<li>
        <button class="delete" type="button">X</button><span>${skill}</span>          
        </li>`) 
}

const deleteSkill = (evt) => {
    $(evt.target).parent().html('')
    console.log(this)
    console.log($(evt.target).parent() )
}

$('#add-skill-btn').on('click', submitSkill)
$('#skill-text-box').on('blur', getSkill)
$('ul').on('click', deleteSkill)
//capture input in text box

//on click add skill to UL




