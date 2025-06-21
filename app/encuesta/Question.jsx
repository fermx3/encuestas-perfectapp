'use client';
import React from 'react';

const Question = ({ question, value, onChange }) => {
  const { id, question: text, type, options, placeholder, prefix, suffix, maxLength, max } = question;

  if (type === 'multi-choice') {
    return (
      <div>
      <p className="text-lg font-semibold text-slate-800 mb-2">{text}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt, idx) => {
        const isOther = opt.toLowerCase() === 'otros' || opt.toLowerCase() === 'other';
        const checked = value?.some(v => (isOther ? typeof v === 'string' && v.startsWith('Otros:') : v === opt));
        const otherValue = isOther
          ? (value?.find(v => typeof v === 'string' && v.startsWith('Otros:')) || '').replace(/^Otros:\s*/, '')
          : '';

        return (
          <label
          key={idx}
          className={`flex items-center px-4 py-2 rounded-full cursor-pointer border
            ${checked ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-slate-700 border-gray-300 hover:bg-blue-50'}
          `}
          style={{ userSelect: 'none' }}
          >
          <input
            type="checkbox"
            value={opt}
            checked={checked}
            onChange={(e) => {
            let newValues = value ? [...value] : [];
            if (e.target.checked) {
              if (isOther) {
              // Add placeholder for Otros if not present
              if (!newValues.some(v => typeof v === 'string' && v.startsWith('Otros:'))) {
                newValues.push('Otros: ');
              }
              } else {
              newValues.push(opt);
              }
            } else {
              if (isOther) {
              newValues = newValues.filter(v => !(typeof v === 'string' && v.startsWith('Otros:')));
              } else {
              newValues = newValues.filter(v => v !== opt);
              }
            }
            onChange(id, newValues);
            }}
            className="w-6 h-6 accent-blue-500 mr-2"
            style={{ minWidth: 24, minHeight: 24 }}
          />
          <span>{opt}</span>
          {isOther && checked && (
            <input
            type="text"
            className="ml-2 p-1 rounded border border-gray-300 w-full max-w-xs text-sm white"
            placeholder="Especifica..."
            value={otherValue}
            required
            onChange={e => {
              const newOther = `Otros: ${e.target.value}`;
              let newValues = value ? [...value] : [];
              const idx = newValues.findIndex(v => typeof v === 'string' && v.startsWith('Otros:'));
              if (idx !== -1) {
              newValues[idx] = newOther;
              } else {
              newValues.push(newOther);
              }
              onChange(id, newValues);
            }}
            />
          )}
          </label>
        );
        })}
      </div>
      {/* Validation message for Otros */}
      {options.some(opt => (opt.toLowerCase() === 'otros' || opt.toLowerCase() === 'other')) && value?.some(v => typeof v === 'string' && v.startsWith('Otros:')) && !value.find(v => typeof v === 'string' && v.match(/^Otros:\s*\S+/)) && (
        <div className="text-red-500 text-sm mt-1">Por favor especifica el campo "Otros".</div>
      )}
      </div>
    );
  }

  if (type === 'single-choice') {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={`question-${id}`}>
          {text}
        </label>
        <select
          id={`question-${id}`}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}

          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Selecciona una opción</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
  if (type === 'text') {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={`question-${id}`}>
          {text}
        </label>
        <input
          type="text"
          id={`question-${id}`}
          placeholder={placeholder || 'Escribe tu respuesta aquí...'}
          maxLength={maxLength}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}

          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    );
  }
  if (type === 'number') {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={`question-${id}`}>
          {text}
        </label>
      <div className="flex items-center">
        {prefix && <span className="text-gray-600 mr-2">{prefix}</span>}
        <input
          type="number"
          id={`question-${id}`}
          value={value}
          min={0}
          max={max}
          onChange={(e) => onChange(id, e.target.value)}

          className="w-full p-2 border border-gray-300 rounded"
        />
        {suffix && <span className="text-gray-600 ml-2">{suffix}</span>}
        </div>
      </div>
    );
  }

  if (type === 'ordered-list') {
    // Ordered list with drag-and-drop to reorder
    const [orderedOptions, setOrderedOptions] = React.useState(value || options);

    // Update parent when order changes
    React.useEffect(() => {
      if (JSON.stringify(orderedOptions) !== JSON.stringify(value)) {
        onChange(id, orderedOptions);
      }
      // eslint-disable-next-line
    }, [orderedOptions]);

    // Drag and drop handlers
    const dragItem = React.useRef();
    const dragOverItem = React.useRef();

    const handleDragStart = (index) => {
      dragItem.current = index;
    };

    const handleDragEnter = (index) => {
      dragOverItem.current = index;
    };

    const handleDragEnd = () => {
      const newList = [...orderedOptions];
      const draggedItem = newList.splice(dragItem.current, 1)[0];
      newList.splice(dragOverItem.current, 0, draggedItem);
      setOrderedOptions(newList);
      dragItem.current = null;
      dragOverItem.current = null;
    };

    // Arrow handlers for mobile
    const moveUp = (index) => {
      if (index === 0) return;
      const newList = [...orderedOptions];
      [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
      setOrderedOptions(newList);
    };

    const moveDown = (index) => {
      if (index === orderedOptions.length - 1) return;
      const newList = [...orderedOptions];
      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
      setOrderedOptions(newList);
    };

    const green_gradient_colors = [
      'from-green-500 to-green-600',
      'from-green-400 to-green-500',
      'from-green-300 to-green-400',
      'from-green-200 to-green-300',
      'from-green-100 to-green-200',
      'from-green-50 to-green-100',
    ];

    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={`question-${id}`}>
          {text}
        </label>
        <ol className="list-decimal pl-5">
          {orderedOptions.map((option, index) => (
            <li
              key={option}
              className={`bg-gradient-to-r ${green_gradient_colors[index]} p-2 rounded mb-2 flex items-center justify-between cursor-move`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
              onDragOver={e => e.preventDefault()}
            >
              <span>{index + 1}- {option}</span>
              <span className="flex flex-col ml-2">
                <button
                  type="button"
                  aria-label="Mover arriba"
                  className={`text-gray-600 hover:text-green-700 p-1 disabled:opacity-30`}
                  onClick={() => moveUp(index)}
                  disabled={index === 0}
                  tabIndex={0}
                >
                  ▲
                </button>
                <button
                  type="button"
                  aria-label="Mover abajo"
                  className={`text-gray-600 hover:text-green-700 p-1 disabled:opacity-30`}
                  onClick={() => moveDown(index)}
                  disabled={index === orderedOptions.length - 1}
                  tabIndex={0}
                >
                  ▼
                </button>
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (type === 'percentages-sum-100') {
    // Calcula la suma actual de los valores ingresados
    const total = options.reduce((sum, option) => sum + (parseInt(value?.[option]) || 0), 0);
    const isComplete = total === 100;

    return (
      <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={`question-${id}`}>
        {text}
      </label>
      <div className="flex flex-wrap space-x-2">
        {options.map((option, index) => (
        <div key={index} className="flex-1">
          <label className="block text-gray-600 mb-1">{option}</label>
          <input
          type="number"
          min={0}
          max={100}
          placeholder={0}
          value={value?.[option] || ''}
          onChange={(e) => {
            const inputVal = parseInt(e.target.value) || 0;
            const newValue = { ...value, [option]: inputVal };
            const newTotal = options.reduce((sum, opt) => sum + (opt === option ? inputVal : (parseInt(value?.[opt]) || 0)), 0);
            if (newTotal <= 100) {
            onChange(id, newValue);
            }
          }}
          className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        ))}
      </div>
      <div className="mt-2 text-sm">
        Suma total: <span className={isComplete ? "text-green-600" : "text-red-600"}>{total}</span> / 100
        {!isComplete && <span className="ml-2 text-red-500">La suma debe ser exactamente 100%</span>}
      </div>
      </div>
    );
  }

  return <p className='text-red-500'>Tipo de pregunta no soportado: {type}</p>;
}

export default Question;
