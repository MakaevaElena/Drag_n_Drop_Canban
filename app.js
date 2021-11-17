const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragStart = (evt) => {
    evt.target.classList.add('hold');
    setTimeout(() => {
        evt.target.classList.add('hide');
    });
};

const dragEnd = (evt) => {
    evt.target.classList.remove('hold', 'hide');
};

const dragOver = (evt) => {
    evt.preventDefault();
};
const dragEnter = (evt) => {
    evt.target.classList.add('hovered');
};
const dragLeave = (evt) => {
    evt.target.classList.remove('hovered');
};
const dragDrop = (evt) => {
    evt.target.append(item);
    evt.target.classList.remove('hovered');
};

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', dragDrop);
});