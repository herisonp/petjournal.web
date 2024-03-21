import { useState } from "react";
import Link from "next/link";
import Female from "./assets/female";
import HouseComponent from "./assets/house";
import Icon from "./assets/logo";
import Male from "./assets/Men";

function NameSexo() {
    const [maleSelector, setMaleSelector] = useState(false);
    const [femaleSelector, setFemaleSelector] = useState(false);
    const [petName, setPetName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [sexError, setSexError] = useState(false);

    function handleMaleSelector() {
        setMaleSelector(true);
        setFemaleSelector(false);
        setSexError(false);
    }

    function handleFemaleSelector() {
        setFemaleSelector(true);
        setMaleSelector(false);
        setSexError(false);
    }

    function handleNameChange(event: any) {
        const value = event.target.value;
        setPetName(value);
        setNameError(!value.trim());
    }

    function handleSubmit(event: any) {
        event.preventDefault();

        setNameError(!petName.trim());

        setSexError(!maleSelector && !femaleSelector);

        if (nameError || sexError) return;

    }

    return (
        <div className="flex flex-col font-quicksand text-primary/purple bg-gray/100">
            <header className="flex w-full  relative justify-center border-b ">
                <Link href="/" className="mt-[0.5rem] mb-[0.5rem]">
                    <Icon />
                </Link>
            </header>
            <main className="p-4 mt-2 ">
                <span className="flex gap-1 ml-4">
                    <HouseComponent />
                    Cadastro pet
                </span>
                <div className="text-xl font-bold w-[327px] mt-[1rem] ml-4">
                    <h2>Uau!</h2>
                    <p className="mt-[0.5rem]">Ficamos muito felizes em receber mais um gato em nossa comunidade!</p>
                </div>
                <div className="flex flex-col gap-2 text-gray/400 mt-8 ml-4">
                    <h2 className="text-center font-semibold text-base">Qual o nome do seu companheiro?</h2>
                    <label className="text-xs font-medium ml-1.5">Nome:</label>
                    <input 
                        type="text" 
                        placeholder="Digite aqui..." 
                        className="border border-dashed  border-gray/300 w-[327px] px-1 py-2 rounded-lg" 
                        value={petName}
                        onChange={handleNameChange}
                        required
                    />
                    {nameError ? <span className="text-red-500 text-[12px] font-medium">Campo obrigatório</span> : <p className="text-gray/300 text-[12px] font-medium">*Campo obrigátorio</p>}
                </div>

                <div className="text-gray/400 mt-6">
                    <h2 className="text-center font-semibold text-base">Qual o sexo do seu Pet?</h2>
                    <div className="flex justify-center gap-4 mt-4 ">
                        <button 
                            className={`flex justify-center flex-col items-center border border-solid ${maleSelector ? 'border-primary/purple' : 'border-gray/300'} gap-1 px-1 py-2 bg-white w-[133px] h-[133px] rounded-[32px] hover:border-solid hover:border-primary/purple hover:border-2`}
                            type='button'
                            onClick={handleMaleSelector}
                        >
                            <Male />
                            <p className="text-sm font-semibold text-center">Macho</p>
                        </button>
                        <button 
                            className={`flex justify-center flex-col items-center border border-solid ${femaleSelector ? 'border-primary/purple' : 'border-gray/300'} gap-1 px-1 py-2 bg-white w-[133px] h-[133px] rounded-[32px] hover:border-solid hover:border-primary/purple hover:border-2`}
                            type='button'
                            onClick={handleFemaleSelector}
                        >
                            <Female />
                            <p className="text-sm font-semibold text-center">Fêmea</p>
                        </button>
                    </div>
                    {sexError ?  <span className="text-red-500">*Campo obrigatório</span>: <p className="text-gray/300 text-[12px] font-medium">*Campo obrigatório</p> }
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        type="button"
                        className="border  border-primary/purple   text-primary/purple px-4 py-2 rounded-lg  w-[156px] h-[48px] font-bold"
                    >
                        Voltar
                    </button>
                    <button
                        type="submit"
                        className="bg-primary/purple text-white px-4 py-2 rounded-lg  w-[156px] h-[48px] font-bold"
                        onClick={handleSubmit}
                    >
                        Continuar
                    </button>
                </div>
            </main>
        </div>
    )
}

export default NameSexo;