import { useState } from 'react';
import {
  Card,
  Spacer,
  Button,
  Input,
  Textarea,
  Tooltip,
} from '@nextui-org/react';

import { AddIcon, DeleteIcon } from './AddIcon';

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
    <div>
      <section className="flex items-center justify-center min-h-screen min-w-screen p-20">
        <Card className="max-w-lg p-10" fullWidth={true}>
          <h4 className="text-2xl font-bold mb-6">Create Course</h4>
          <Input
            fullWidth
            isRequired
            type="text"
            label="Course Name"
            placeholder="Enter the course name"
            className="mb-4"
          />
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Course Style</p>
            <Input
              fullWidth
              isRequired
              type="text"
              label="Course Style"
              placeholder="Describe the course style"
              className="mb-4"
            />
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Course Structure</p>
            {modules.map((module, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 mb-4 relative">

                <Tooltip content="Delete Module">
                  <Button
                    color="danger"
                    size='sm'
                    className='absolute top-2 right-2 z-10' // Adjusted z-index
                    aria-label="Delete Module"
                    onClick={() => deleteModule(index)}
                  >
                    <DeleteIcon className='h-20' />
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
                  className="mb-2"
                />
                <Textarea
                  fullWidth
                  isRequired
                  label="Topics"
                  placeholder="Enter topics (comma separated)"
                  value={module.topics}
                  onChange={(e) => handleModuleChange(index, 'topics', e.target.value)}
                  className="mb-2"
                />
              </div>
            ))}
            <Tooltip content="Add new Module">
              <Button onClick={addModule} isIconOnly color="default" aria-label="Add Module">
                <AddIcon />
              </Button>
            </Tooltip>
          </div>
          <Input
            fullWidth
            isRequired
            type="file"
            label="Upload Course PDF"
            accept=".pdf"
            className="mb-4"
          />
          <Spacer y={1} />
          <Button color='primary'>Create Course</Button>
        </Card>
      </section>
    </div>
  );
}
