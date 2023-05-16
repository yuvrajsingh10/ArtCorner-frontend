const search_bar = {
    top: '72px',
    left: '45%',
    border: '1px solid #80808029'
}

export default function Search(props) {
    return (
        <div className='card shadow-sm w-50 p-2 fixed-top' style={search_bar}>
            <input type='text' className="form-control" placeholder="Search" />
        </div>
    )
}