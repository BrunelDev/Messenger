"use client"
export function SearchBar({checked, onChecked, onChange}){
    return (
        <div>
            <input type="text" name="search"
            placeholder="Rechercher..."
            onChange={(e)=>onChange(e.target.value)}
            
            
            />
            <input type="checkbox" name="check" checked= {checked} onChange={(e)=>onChecked(e.target.checked)} />
        </div>
    )
}