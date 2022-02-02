package com.carrito.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrito.dao.IOrden;
import com.carrito.domain.Orden;

@Service
public class OrdenServiceImpl implements IOrdenService {
	
	@Autowired
	private  IOrden ordenDao; 
	
	@Override
	public List<Orden> listarOrdenes() {
		// TODO Auto-generated method stub
		return ordenDao.findAll();
	}

	@Override
	public Orden guardar(Orden orden) {
		// TODO Auto-generated method stub
		return ordenDao.save(orden);
	}

	@Override
	public void elminar(Orden orden) {
		// TODO Auto-generated method stub
		ordenDao.delete(orden);
		
	}

	@Override
	public Orden encontrarOrdenPorId(Long id) {
		// TODO Auto-generated method stub
		return ordenDao.findById(id).get();
	}

}
