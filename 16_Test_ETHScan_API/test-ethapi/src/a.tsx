import React, { useEffect, useState } from 'react';

import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import { IconChevronDown, IconTrash } from 'components/Icons';
import { useSelectedMethod } from 'state/selection/hook';

import { typeOptions } from './config';
import { InputRequestParamProps } from '../types';

const InputRequestParam: React.FC<InputRequestParamProps> = ({ index }) => {
  const {
    selectedMethod,
    reducers: { editSelectionAbi, editSelectionParams },
  } = useSelectedMethod();

  const [showDropdown, setShowDropdown] = useState(false);

  const [searchDropdown, setSearchDropdown] = useState<string>('');

  const changeTypeHandler = (newType: string): void => {
    if (selectedMethod) {
      const requestParams = [...selectedMethod.abi.inputs];
      requestParams[index] = { ...requestParams[index], type: newType };

      editSelectionAbi({
        abi: { ...selectedMethod.abi, inputs: requestParams },
      });
    }
  };

  const changeNameHandler = (newName: string): void => {
    if (selectedMethod) {
      const requestParams = [...selectedMethod.abi.inputs];
      requestParams[index] = { ...requestParams[index], name: newName };

      editSelectionAbi({
        abi: { ...selectedMethod.abi, inputs: requestParams },
      });
    }
  };

  const changeValueHandler = (value: string): void => {
    if (selectedMethod) {
      const paramValues = [...selectedMethod.params];
      paramValues[index] = value;

      editSelectionParams({
        params: paramValues,
      });
    }
  };

  const removeHandler = (): void => {
    if (selectedMethod) {
      const requestParams = [...selectedMethod.abi.inputs];
      requestParams.splice(index, 1);

      const paramValues = [...selectedMethod.params];
      paramValues.splice(index, 1);

      editSelectionAbi({
        abi: { ...selectedMethod.abi, inputs: requestParams },
      });

      editSelectionParams({
        params: paramValues,
      });
    }
  };

  const typeDropdown = (select: string): void => {
    setSearchDropdown(select);
    console.log(searchDropdown);
  };

  useEffect(() => {
    if (!selectedMethod?.abi.inputs[index].type) {
      changeTypeHandler(typeOptions[0].value);
    }
  }, []);

  return (
    <div className="flex flex-row items-center justify-center w-full h-8 pr-2 divide-x">
      <Dropdown
        isOpen={showDropdown}
        positions={['bottom', 'top', 'right', 'left']}
        onClickOutside={() => {
          setShowDropdown(false);
        }}
        content={() => (
          <div className="z-50 px-1 py-1 overflow-auto max-h-64">
            {typeOptions.map((option) => {
              // console.log(searchDropdown);
              // if (searchDropdown.includes(option.value)) {
              //   console.log('enter');
              return (
                <button
                  className="flex items-center justify-start w-32 h-8 pl-2 text-sm rounded-md hover:bg-gray-100"
                  type="button"
                  key={option.value}
                  onClick={() => {
                    changeTypeHandler(option.value);
                    setShowDropdown(false);
                    typeDropdown(option.value);
                  }}
                >
                  {option.value}
                </button>
              );
              // }
              // return <></>;
            })}
          </div>
        )}
      >
        <button
          className="flex items-center justify-between w-40 h-full px-2 hover:bg-gray-100"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <input
            className="w-full h-full px-2 outline-none hover:bg-gray-100"
            placeholder="type"
            type="text"
            autoComplete="off"
            value={searchDropdown}
            onChange={(e) => setSearchDropdown(e.target.value)}
          />
          {selectedMethod?.abi.outputs[index].type}
          <IconChevronDown
            className={`h-4 w-4 transition-colors duration-200 ${
              showDropdown ? 'text-red-500' : ''
            }`}
          />
        </button>
      </Dropdown>
      <div className="flex items-center justify-center w-full h-full divide-x">
        <input
          className="w-6/12 h-full px-4 outline-none"
          placeholder={`Parameter ${index + 1}`}
          type="text"
          autoComplete="off"
          value={selectedMethod?.abi.inputs[index].name}
          onChange={(event) => {
            changeNameHandler(event?.target.value);
          }}
        />
        <input
          className="w-6/12 h-full px-4 outline-none"
          placeholder={`Value ${index + 1}`}
          type="text"
          autoComplete="off"
          value={selectedMethod?.params[index]}
          onChange={(event) => {
            changeValueHandler(event?.target.value);
          }}
        />
      </div>
      <Button size="xs" onClick={removeHandler}>
        <IconTrash className="w-4 h-4 text-red-600" />
      </Button>
    </div>
  );
};

export default InputRequestParam;
