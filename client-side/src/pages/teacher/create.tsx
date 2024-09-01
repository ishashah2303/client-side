import { useState } from 'react';
import {
  Card,
  Spacer,
  Button,
  Input,
  Textarea,
  Tooltip,
} from '@nextui-org/react';

import { AddIcon } from './AddIcon';
import DefaultLayout from "@/layouts/default";


interface Module {
  moduleName: string;
  topics: string;
}

export default function Create() {
  const [modules, setModules] = useState<Module[]>([{ moduleName: '', topics: '' }]);

  const addModule = () => {
    setModules([...modules, { moduleName: '', topics: '' }]);
  };

  const handleModuleChange = (index: number, field: keyof Module, value: string) => {
    const newModules = [...modules];
    newModules[index][field] = value;
    setModules(newModules);
  };

  const deleteModule = (index: number) => {
    const newModules = modules.filter((_, i) => i !== index);
    setModules(newModules);
  };

  return (
    <DefaultLayout>
      <section className="flex items-center justify-center min-h-screen min-w-screen p-20">
        <Card className="max-w-lg p-10" fullWidth={true} style={{ backgroundColor: '#C7C8CC' }}>
          <h4 className="text-2xl  mb-6 roboto-bold">Create Course</h4>
          <p className="text-sm mb-2 roboto-regular">Course Name:</p>
          <Input
            fullWidth
            isRequired
            type="text"
            placeholder="Enter the course name"
            className="mb-4 roboto-thin"
          />
          <div className="mb-4">
            <p className="text-sm roboto-regular mb-2">Course Style:</p>
            <Input
              fullWidth
              isRequired
              type="text"
              placeholder="Describe the course style"
              className="mb-4 roboto-thin"
            />
          </div>
          <div className="mb-4">
            <p className="text-sm roboto-regular mb-2">Course Structure:</p>
            {modules.map((module, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 mb-4 relative">

                <Tooltip content="Delete Module">
                  <Button
                    color="danger"
                    size='sm'
                    className='absolute top-2 right-2 z-10 roboto-thin'
                    aria-label="Delete Module"
                    onClick={() => deleteModule(index)}
                  >
                    Delete
                  </Button>
                </Tooltip>
                <Input
                  fullWidth
                  isRequired
                  type="text"
                  label={`Module ${index + 1} Name`}
                  placeholder="Enter module name"
                  value={module.moduleName}
                  onChange={(e) => handleModuleChange(index, 'moduleName', e.target.value)}
                  className="mb-2 roboto-thin"
                />
                <Textarea
                  fullWidth
                  isRequired
                  label="Topics"
                  placeholder="Enter topics (comma separated)"
                  value={module.topics}
                  onChange={(e) => handleModuleChange(index, 'topics', e.target.value)}
                  className="mb-2 roboto-thin"
                />
              </div>
            ))}
            <Tooltip content="Add new Module">
              <Button onClick={addModule} isIconOnly className='roboto-thin' color="default" aria-label="Add Module">
                <AddIcon />
              </Button>
            </Tooltip>
          </div>
          <Input
            fullWidth
            type="file"
            label="Upload Course Related PDFs"
            accept=".pdf"
            className="text-sm roboto-regular mb-2"
          />
          <Spacer y={1} />
          <Button color='primary' className='roboto-thin'>Create Baseline Course</Button>
        </Card>
      </section>
    </DefaultLayout>
  );
}
