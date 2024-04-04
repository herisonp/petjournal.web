import { ChangeEvent, useState, MouseEvent } from "react";
import { CircleX } from "lucide-react";
import Link from "next/link";
import Female from "./assets/female";
import HouseComponent from "./assets/house";
import Icon from "./assets/logo";
import Male from "./assets/Men";
import { nameRegex } from "@/utils/Regex";
import { useRouter } from 'next/router'

function NameSexo() {
    const [maleSelector, setMaleSelector] = useState(false);
    const [femaleSelector, setFemaleSelector] = useState(false);
    const [petName, setPetName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [sexError, setSexError] = useState(false);

    const router = useRouter();

    function handleMaleSelector() {
        setMaleSelector(true);
        setFemaleSelector(false);
    }

    function handleFemaleSelector() {
        setFemaleSelector(true);
        setMaleSelector(false);
    }

    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setPetName(value);
        setNameError(!value.trim());
    }

    const MIN_NAME_LENGTH = 2;
    const MAX_NAME_LENGTH = 30;

    function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const isPetNameValid = petName.trim().length >= MIN_NAME_LENGTH && petName.trim().length <= MAX_NAME_LENGTH && nameRegex.test(petName);

        setNameError(!isPetNameValid);
        setSexError(!maleSelector && !femaleSelector);

        if (isPetNameValid && (maleSelector || femaleSelector) && !sexError) {
            router.push('/');
        }
    }

    const inputContainerClass = nameError
    ? "border border-solid border-error/300 w-[327px] px-1 py-2 rounded-lg flex space-x-4"
    : "border border-dashed border-gray/300 w-[327px] px-1 py-2 rounded-lg";

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
                  
                    <div className={inputContainerClass} >
                        <input 
                            type="text" 
                            placeholder="Digite aqui..." 
                            value={petName}
                            onChange={handleNameChange}
                            required
                            className="w-full bg-transparent focus:outline-none text-gray/400 font-semibold text-sm"
                        />
                        {nameError && <CircleX size={25} color="#FF917A" strokeWidth={1}/>}
                    </div>
                    {nameError && (
                        <span className="text-error/300 text-[12px] font-medium">
                            *O nome fornecido deve ter entre 2 e 30 caracteres, não são permitidos caracteres especiais, nem números. Por favor, insira um nome válido.
                        </span>
                    )}
                    {!nameError && (
                        <p className="text-gray/300 text-[12px] font-medium ">
                            *Campo obrigatório
                        </p>
                    )}
                    </div>

                <div className="text-gray/400 mt-6 justify-center">
                    <h2 className="text-center font-semibold text-base">Qual o sexo do seu Pet?</h2>
                    <div className="flex justify-center gap-4 mt-4 ">
                        <button 
                            className={`flex justify-center flex-col items-center border border-solid ${maleSelector ? 'border-primary/purple' : 'border-gray/300 border-dashed'} gap-1 px-1 py-2 bg-white w-[133px] h-[133px] rounded-[32px] hover:border-solid hover:border-primary/purple hover:border-2`}
                            type='button'
                            onClick={handleMaleSelector}
                        >
                            <Male />
                            <p className="text-sm font-semibold text-center">Macho</p>
                        </button>
                        <button 
                            className={`flex justify-center flex-col items-center border border-solid ${femaleSelector ? 'border-primary/purple' : 'border-gray/300 border-dashed'} gap-1 px-1 py-2 bg-white w-[133px] h-[133px] rounded-[32px] hover:border-solid hover:border-primary/purple hover:border-2`}
                            type='button'
                            onClick={handleFemaleSelector}
                        >
                            <Female />
                            <p className="text-sm font-semibold text-center">Fêmea</p>
                        </button>
                    </div>
                    {sexError ?  <span className="text-error/300 text-[12px] font-medium ml-12">*Campo obrigatório</span>: <p className="text-gray/300 text-[12px] font-medium ml-12">*Campo obrigatório</p> }
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        type="button"
                        className="border  border-primary/purple   text-primary/purple px-4 py-2 rounded-lg  w-[156px] h-[48px] font-bold"
                        onClick={() => router.back()}
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