import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ImcFormPageView } from './ImcFromPage'

export default function ImcFormPage() {
  const {
    register,
    handleSubmit
  } = useForm()

  function getValuesHookForms(data) {
    console.log(data)
  }

  return (
    <ImcFormPageView>
      <h1>Preencha o formulario formulario</h1>
      <form onSubmit={handleSubmit(getValuesHookForms)} >
        <label>Digite aqui seu peso</label>
        <input type="number" name="weight" id="weight" {...register("weight")} />
        <label>Digite aqui sua altura</label>
        <input type="number" name="height" id="height" {...register("height")} />
        <label>Seu IMC aparecera aqui</label>
        <button type='submit'  >Enviar!</button>
      </form>
    </ImcFormPageView>
  )
}
