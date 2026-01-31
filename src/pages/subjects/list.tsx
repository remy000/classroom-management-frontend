import { CreateButton } from '@/components/refine-ui/buttons/create'
import { DataTable } from '@/components/refine-ui/data-table/data-table'
import { Breadcrumb } from '@/components/refine-ui/layout/breadcrumb'
import { ListView } from '@/components/refine-ui/views/list-view'
import { SelectContent, SelectItem } from '@/components/ui/select'
import { DEPARTMENTS_OPTIONS } from '@/constants'
import { Subject } from '@/types'
import { Select, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { useTable } from '@refinedev/core'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SubjectList = () => {
    const [searchText, setSearchText] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("all")

    const subjectTable = useTable<Subject>();
  return (
   <ListView>
    <Breadcrumb/>
    <h1 className='page-title'>Subjects</h1>
    <div className="intro-row">
       <p>Quick access to essential metrics and management tools</p> 
    </div>
    <div className="action-rows">
        <div className="search-field mb-2.5">
            <Search className='search-icon'/>
            <input type="text" placeholder='Search by name'
            className='pl-10 w-full'
             value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
            <Select value={selectedDepartment} onValueChange={(value) => setSelectedDepartment(value)}>
                <SelectTrigger className='select-trigger w-full sm:w-auto'>
                    <SelectValue placeholder="Filter by Department"/>
          
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all'>
                        All Departments
                    </SelectItem>
                    {DEPARTMENTS_OPTIONS.map((dept) => (
                        <SelectItem key={dept.value} value={dept.value}>
                            {dept.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <CreateButton/>
        </div>
    </div>
    <DataTable table={subjectTable}/>
   </ListView>
  )
}

export default SubjectList