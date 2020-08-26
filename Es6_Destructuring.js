// exmple 1

var saveFileed = {
    extension: 'jpg',
    name: 'repost',
    sixe: 14040
};


function fileSummary({ name, extension, size }, { color }) {
    return `${color} the file ${name}.${extension} is of size ${size}`;

}

fileSummary(saveFileed, { color: 'red' });

// exmple 2

const companies = [
    'Google',
    'FaceBook',
    'Uber'
];

// const [name] = companies;

// const firstCompany = companies[0];

const [name, name1, name2, ...rest] = companies;

const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer(profile) {
    var title = profile.title;
    var department = profile.department;
    return title === 'Engineer' && department === 'Engineering';
}